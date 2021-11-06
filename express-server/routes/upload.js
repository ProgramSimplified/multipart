const os = require('os')
const express = require('express')
const multer = require('multer')

const router = express.Router()

// dest: where to store the file, 这里设置为操作系统的临时文件夹
const upload = multer({ dest: os.tmpdir() })

router.post('/', upload.single('file'), function (req, res, next) {
  const title = req.body.title
  const file = req.file

  console.log(title)
  console.log(file)

  res.sendStatus(200)
})

module.exports = router
