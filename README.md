# multipart/form-data

上传文件，服务器接收到文件后首先会保存至临时文件夹，再进行后续处理。

## Server

项目通过 `express-generator` 生成，`routes/upload.js` 完成文件的接收

> 处理 multipart/form-data 数据的库为 multer

```shell
npm start
```

## Client

请求的客户端应用的是 nodejs。

```shell
npm start
```

控制台打印 Upload complete，即为成功。同时，服务端会打印出文件信息。

## Reference

- [How to Handle File Uploads from Node.js to Express](https://www.twilio.com/blog/handle-file-uploads-node-express)