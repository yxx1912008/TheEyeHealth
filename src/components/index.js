/*
批量引入组件进行注册
后续如有增加，可在此处引入
 */
// 1.公共组件
import Header from './common/Header'
import Footer from './common/Footer'
import PageError from './common/PageError'


//视力测试组件
import EyeTestBanner from './eyetest/EyeTestBanner'
import EyeTestButton from './eyetest/EyeTestButton'
import AstiTestDetail from './eyetest/AstiTestDetail'
import ColorTestDetail from './eyetest/ColorTestDetail'
import MainEyeTestDetail from './eyetest/MainEyeTestDetail'
import YellowTestDetail from './eyetest/YellowTestDetail'
import EyeHealthDetail from './eyehealth/EyeHealthDetail'

export default {
  Header,
  Footer,
  PageError,

  //视力测试相关
  EyeTestBanner,
  EyeTestButton,
  AstiTestDetail,
  ColorTestDetail,
  MainEyeTestDetail,
  YellowTestDetail,
  EyeHealthDetail


}
