# fengtong_map_weapp

#### 介绍
风瞳地图小程序

#### 软件架构
本软件为小程序代码，需要微信开发者工具，以及前端工具链(nodejs@10.0+&yarn@1.3)
采用小程序官方框架wepy，包管理工具使用yarn（特别注意不是npm）
因为软件已有一定开发时限，部分依赖已有较大更新，故不要升级依赖版本：
    wepy-cli严格使用1.7.X版本（不能更高也不能低）
    其他依赖严格使用包管理工具自动安装（package文件已配置好）

#### 安装教程

1. clone代码到本地，安装依赖，在项目目录执行命令（详见yarn文档）：
    yarn
2. 编译并开启实时编译选项，在项目目录执行命令（详见wepy1.X文档）：
    wepy build --watch
3. 在微信开发者工具中导入项目，按照小程序开发步骤开发（详见小程序开发者文档）

#### 参与贡献

由王振学长创建并独立开发了本项目
后由部门成员维护
