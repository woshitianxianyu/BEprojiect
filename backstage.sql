/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : backstage

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-08 14:54:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `goodstype` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `goodsname` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `upload` varchar(255) DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('001', '村衫', '衬衫 易打理 短袖 领尖扣 男款 白蓝细格', '338.00', null, 'false');
INSERT INTO `goodslist` VALUES ('002', '村衫', '水洗棉 贴布绣宽松 女款', '339.00', null, 'true');
INSERT INTO `goodslist` VALUES ('003', '村衫', '衬衫 法兰绒 领尖扣 男款', '338.00', null, 'true');
INSERT INTO `goodslist` VALUES ('004', '村衫', '凡客衬衫 牛津纺 美棉 男款', '389.00', null, 'false');
INSERT INTO `goodslist` VALUES ('005', '卫衣', '凡客卫衣 圆领 熊本熊 S2', '198.00', null, 'true');
INSERT INTO `goodslist` VALUES ('006', '卫衣', '凡客卫衣 圆领 熊本熊 S2', '198.00', null, 'true');
INSERT INTO `goodslist` VALUES ('008', '卫衣', '凡客卫衣 圆领 熊本熊 S2', '198.00', null, 'true');
INSERT INTO `goodslist` VALUES ('009', '卫衣', '凡客卫衣 圆领 熊本熊 S2', '198.00', null, 'true');
INSERT INTO `goodslist` VALUES ('010', '卫衣', '凡客卫衣 圆领 熊本熊 S2', '198.00', null, 'true');
INSERT INTO `goodslist` VALUES ('011', '卫衣', '凡客卫衣 圆领 熊本熊 S2', '198.00', null, 'true');
INSERT INTO `goodslist` VALUES ('012', '卫衣', '凡客卫衣 圆领 熊本熊 S2', '198.00', null, 'true');
INSERT INTO `goodslist` VALUES ('013', '卫衣', '凡客卫衣 圆领 熊本熊 S2', '198.00', null, 'true');
INSERT INTO `goodslist` VALUES ('020', '裤子', '长裤', '111.00', null, 'true');
INSERT INTO `goodslist` VALUES ('021', '村衫', '衬衫 易打理 短袖 领尖扣 男款 白蓝细格', '338.00', null, 'false');
INSERT INTO `goodslist` VALUES ('014', '鞋', 'onemix玩觅 坚持 男女款', '456.00', null, 'true');
INSERT INTO `goodslist` VALUES ('015', '鞋', '凡客运动鞋 复古跑 3 男款', '358.00', null, 'true');
INSERT INTO `goodslist` VALUES ('018', '卫衣', '卫衣男装', '334.00', null, 'true');
INSERT INTO `goodslist` VALUES ('019', '鞋', '飞科牌', '666.00', null, 'false');
INSERT INTO `goodslist` VALUES ('022', '村衫', '衬衫 易打理 短袖 领尖扣 男款 白蓝细格', '338.00', null, 'false');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `admin` varchar(255) NOT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `Role` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `header` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `asse` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('017', 'yk', null, '管理员', null, null, null, '16666666666', '456@ff.com', null, '2018-10-08 11:35:26', '已审核');
INSERT INTO `login` VALUES ('016', 'yk', '666666', '管理员', null, null, null, '16666666666', '456@ff.com', null, '2018-10-08 08:56:57', '已审核');
INSERT INTO `login` VALUES ('013', 'sx', '666666', '超级无敌管理员', '时光不再', '男', null, '17888888888', 'rr@77.com', '灵感的世界', '2018-10-07 13:36:30', '已审核');

-- ----------------------------
-- Table structure for typelist
-- ----------------------------
DROP TABLE IF EXISTS `typelist`;
CREATE TABLE `typelist` (
  `id` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `typename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of typelist
-- ----------------------------
INSERT INTO `typelist` VALUES ('014', '衬衫');
INSERT INTO `typelist` VALUES ('013', '手套');
INSERT INTO `typelist` VALUES ('012', '袜子');
INSERT INTO `typelist` VALUES ('011', '鞋子');
INSERT INTO `typelist` VALUES ('009', '棉衣');
INSERT INTO `typelist` VALUES ('010', '卫衣');
INSERT INTO `typelist` VALUES ('019', '裙子1号');
INSERT INTO `typelist` VALUES ('016', '裤子');
INSERT INTO `typelist` VALUES ('018', '裙子');
INSERT INTO `typelist` VALUES ('020', '手套');
INSERT INTO `typelist` VALUES ('021', '衬衫');
INSERT INTO `typelist` VALUES ('022', '衣服');
INSERT INTO `typelist` VALUES ('023', '衣服1');
SET FOREIGN_KEY_CHECKS=1;
