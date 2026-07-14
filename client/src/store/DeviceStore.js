import { makeAutoObservable } from "mobx"

export default class DeviceStore {
   constructor() {
      this._types = [{ id: 1, name: "Холодильники" }, { id: 2, name: "Хуильники" }]
      this._brands = [{ id: 1, name: "холодильники" }, { id: 2, name: "холодильники" }]
      this._devices = [{ id: 1, name: "холодильники", price: 10000, rating: 5, img: '' }, { id: 2, name: "холодильники", price: 10000, rating: 5, img: '' }]
      this._selectedType = {}
      this._selectedBrand = {}
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
   setSelectedType(type) {
      this._selectedType = type
   }
   setSelectedBrand(brand) {
      this._selectedBrand = brand
   }
   get types() {
      return this._types
   }
   get brands() {
      return this._brands
   }
   get devices() {
      return this._devices
   }
   get selectedType() {
      return this._selectedType
   }
   get selectedBrand() {
      return this._selectedBrand
   }
}