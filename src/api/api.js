import {
  wxRequest
} from '../utils/wxRequest'

const _serverURL = 'https://map.c2wei.cn'

//获取校区信息
const getCampuses = (params) => wxRequest(params, _serverURL + '/api/campuses');
//获取类型
const getPlacetype = (params) => wxRequest(params, _serverURL + '/api/placetype');
//获取建筑
const getBuildings = (params) => wxRequest(params, _serverURL + '/api/buildings');
//获取建筑详情
const getBuilding = (params) => wxRequest(params, _serverURL + '/api/building');
//搜索接口
const searchBuildings = (params) => wxRequest(params, _serverURL + '/api/search');


module.exports = {
	getCampuses,
	getPlacetype,
	getBuildings,
	getBuilding,
	searchBuildings
}
