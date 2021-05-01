FROM nginx

COPY build /usr/share/nginx/html

COPY default.conf.template /etc/nginx/conf.d/default.conf.template

# EXPOSE $PORT

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'