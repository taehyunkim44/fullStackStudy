// const AWS = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const path = require('path');

// const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
// const region = 'kr-standard';
// const access_key = 'ACCESS_KEY';
// const secret_key = 'SECRET_KEY';

// const S3 = new AWS.S3({
//   endpoint,
//   region,
//   credentials: {
//     accessKeyId: access_key,
//     secretAccessKey: secret_key,
//   },
// });

// function setUpload(bucket) {
//   const upload = multer({
//     storage: multerS3({
//       s3: s3,
//       bucket: bucket,
//       acl: 'public-read-write',
//       key: function (req, file, cb) {
//         let extension = path.extname(file.originalname); // 확장자명 제거한 파일이름
//         cb(null, Date.now().toString() + extension);
//       },
//     }),
//   }).single('file');
//   return upload;
// }

// module.exports = setUpload;
