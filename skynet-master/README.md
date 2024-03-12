# Skynet Project

## Cài đặt

* Install Redis [link](https://redis.io/docs/install/install-redis/install-redis-on-linux/)
* Install Mongodb [link](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#std-label-install-mdb-community-ubuntu)
* Install Node [link](https://heynode.com/tutorial/install-nodejs-locally-nvm/)

## Chạy ứng dụng

Vào thư mục server

Cài đặt `node_modules` bằng lệnh

```bash
npm i
```

Để chạy ứng dụng, yêu cầu máy Linux đang chạy nền **redis-server** và **mongodb**

Sau đó, khởi động skynet server

```bash
node server.js
```

Truy cập `localhost:3000/test.html` để xem demo websocket, hoặc

dùng postman để thêm mới thiết bị và thao tác với thiết bị (thay vì dùng curl)
