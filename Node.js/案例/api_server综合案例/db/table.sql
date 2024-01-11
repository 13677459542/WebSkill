
-- ----------------------------
-- Table structure for ev_articles
-- ----------------------------
DROP TABLE IF EXISTS `ev_articles`;
CREATE TABLE `ev_articles`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文章标题',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文章内容',
  `cover_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文字封面',
  `pub_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '时间',
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '状态，可选值为：已发布，草稿',
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT '数据是否被标记为删除：0：未删除，1：删除',
  `cate_id` int(11) NOT NULL COMMENT '所属分类id',
  `author_id` int(11) NOT NULL COMMENT '作者id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------
-- Table structure for ev_users
-- ----------------------------
DROP TABLE IF EXISTS `ev_users`;
CREATE TABLE `ev_users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_users
-- ----------------------------
INSERT INTO `ev_users` VALUES (2, 'admin', '$2a$10$LoWwj/zD3Zxx5DPBX6iPhOf2FICHPl/FGZ4y7BW8.k8VqQ3lyM.eC', NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------
-- Table structure for ev_article_cate
-- ----------------------------
DROP TABLE IF EXISTS `ev_article_cate`;
CREATE TABLE `ev_article_cate`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `alias` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_delete` tinyint(1) NOT NULL DEFAULT 0 COMMENT '数据是否被标记为删除：0：未删除，1：删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ev_article_cate
-- ----------------------------
INSERT INTO `ev_article_cate` VALUES (1, '科技', 'keji', 0);
INSERT INTO `ev_article_cate` VALUES (2, '历史', 'lishi', 0);
INSERT INTO `ev_article_cate` VALUES (3, '政治', 'zhengzhi', 0);

SET FOREIGN_KEY_CHECKS = 1;
