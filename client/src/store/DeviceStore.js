import { makeAutoObservable } from "mobx"

export default class DeviceStore {
   constructor() {
      this._types = [{ id: 1, name: "холодильники" }, { id: 2, name: "холодильники" }]
      this._brands = [{ id: 1, name: "холодильники" }, { id: 2, name: "холодильники" }]
      this._devices = [{ id: 1, name: "холодильники", price: 10000, rating: 5, img: '' }, { id: 2, name: "холодильники", price: 10000, rating: 5, img: '' }]
      makeAutoObservable(this)
   }
   setTypes(types) {
      this._types = types
   }
   setBrands(brands) {
      this._brands = brands
   }
   setDevices(devices) {
      this._devices = devices
   }
   get types() {
      return this.types
   }
   get brands() {
      return this._brands
   }
   get devices() {
      return this._devices
   }
}