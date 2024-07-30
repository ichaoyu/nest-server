## Description

a server by nestjs

## 安装使用

- 安装依赖

```bash
pnpm i
```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

- NestJS 执行顺序：中间件 -> 守卫 -> 拦截器/管道 -> 异常过滤器
- TypeOrm 查询 `select: false` 的列需要用 `createQueryBuilder`
- TypeOrm 需要用 `save` 触发关联表操作，`insert` 只影响当前表
- TypeOrm 不要修改数据库表结构，Entity 只做了简单定义，`synchronize` 会报错
- 使用 `IntersectionType` 合并对象是需要逐步创建对象，否则会与其他匿名对象冲突
- DTO 结尾表示请求传输对象，VO 结尾表示响应传输对象
- 如果请求传输数据是对象的话，需要对每一项加上 `class-validator` 的装饰器
