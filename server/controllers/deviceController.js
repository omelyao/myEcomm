const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')
class DeviceController {
   async create(req, res) {
      try {
         const { name, price, brandId, typeId, info } = req.body
         const { img } = req.files
         let fileName = uuid.v4() + ".jpg"
         img.mv(path.resolve(__dirname, '..', 'static', fileName))

         if (info) {
            info = JSON.parse(info)
            info.forEach(element => {
               DeviceInfo.create({
                  title: element.title,
                  description: element.description,
                  deviceId: device.id
               })
            });
         }

         const device = await Device.create({ name, price, brandId, typeId, img: fileName })
         return res.json(device)
      } catch (e) {
         throw ApiError.badRequest(e.message)
      }

   }
   async getAll(req, res) {
      const { brandId, typeId, limit, page } = req.query;

      const limitNum = limit ? Number(limit) : 9;
      const pageNum = page ? Number(page) : 1;

      if (isNaN(limitNum) || limitNum <= 0) {
         throw ApiError.badRequest('Параметр limit должен быть положительным числом');
      }
      if (isNaN(pageNum) || pageNum <= 0) {
         throw ApiError.badRequest('Параметр page должен быть положительным числом');
      }

      const offset = (pageNum - 1) * limitNum;
      let devices;

      if (!brandId && !typeId) {
         devices = await Device.findAndCountAll({ limit: limitNum, offset });
      } else if (brandId && !typeId) {
         devices = await Device.findAndCountAll({ where: { brandId }, limit: limitNum, offset });
      } else if (!brandId && typeId) {
         devices = await Device.findAndCountAll({ where: { typeId }, limit: limitNum, offset });
      } else {
         devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit: limitNum, offset });
      }

      return res.json(devices);
   }
   async getOne(req, res) {
      const { id } = req.params
      const device = await Device.findOne({
         where: { id },
         include: [{ model: DeviceInfo, as: 'info' }]
      })
      return res.json(device)
   }
}

module.exports = new DeviceController()