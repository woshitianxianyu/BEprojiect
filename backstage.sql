/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : backstage

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-30 09:54:06
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
  `admin` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `Role` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `header` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('001', '老王', '666', '超级管理员', '犬夜叉', '男', null, '13888888', '123@ee.com', '这个人很懒啥都没写');
INSERT INTO `login` VALUES ('002', 'yk', '123456', '超级管理员', '网文asda', '男', null, '1566666666243234', '123@ee.com', '这个人很懒啥都没写');
INSERT INTO `login` VALUES ('007', 'laoxie', '123', null, null, null, null, '123456', null, null);

-- ----------------------------
-- Table structure for typelist
-- ----------------------------
DROP TABLE IF EXISTS `typelist`;
CREATE TABLE `typelist` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `typename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of typelist
-- ----------------------------
INSERT INTO `typelist` VALUES ('0000000001', '村衫');
INSERT INTO `typelist` VALUES ('0000000002', '卫衣');
INSERT INTO `typelist` VALUES ('0000000003', '鞋');
INSERT INTO `typelist` VALUES ('0000000004', '棉衣');
SET FOREIGN_KEY_CHECKS=1;
