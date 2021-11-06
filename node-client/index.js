const fs = require('fs')
const axios = require('axios')
const FormData = require('form-data')

const upload = async () => {
  try {
    const file = fs.createReadStream('./file.txt')
    const title = 'My File'

    const form = new FormData()
    form.append('title', title)
    form.append('file', file)

    const resp = await axios.post('http://localhost:3000/upload', form, {
      headers: {
        ...form.getHeaders()
      }
    })

    if (resp.status === 200) {
      return 'Upload complete'
    } else {
      console.log(resp)
    }
  } catch (error) {
    if (typeof error === 'object' && error) {
      return new Error(error.message)
    }
  }
}

upload().then((res) => {
  console.log(res)
})
