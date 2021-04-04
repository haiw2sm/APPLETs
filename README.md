# Applet

>	持续更新个人变成路上的经验、小项目和一些问题解决方法，如果你觉得写的不错请留个星星
>	或者提出你的issue!

### AdaptiveUserDeviceScreenSize.js ###
#### px、rpx、wx.getSystemInfo、api ####
> 这是关于微信小程序开发时需要动态获取用户设备信息，使用API  [**wx.getSystemInfo()**]   时出现的渲染组件尺寸{height,width}与实际Page不相等的解决方法：
> 
> 1. wx.getSystemInfo参数说明：screen{width/height}、window{width/height}的单位均为 **px**
> 2. 微信小程序采用 **rpx** [物理像素] 的适配方案 

因此，采用以下我在网上苦寻的有效的解决方法： 


- 注意：在模拟器上演示时，会不经意遗漏，看下element中对应DOM的尺寸，或者真机编译一下差别很明显。

###  ###
