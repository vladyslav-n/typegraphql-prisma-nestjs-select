# TypeGraphQL & Prisma integration

Fork of `typegraphql-prisma` package ([**https://prisma.typegraphql.com/**](https://prisma.typegraphql.com/)), adjusted to have Nest.js native graphql decorators. It also expects having `select` property in context in a shape of `PrismaSelect`'s pluging output ([**https://paljs.com/plugins/select/#prisma-select/**](https://paljs.com/plugins/select/#prisma-select/)) which allows to fetch all selected include's fields at root query level.

# Additional features

- Like this `/// @TypeGraphQL.field(nullable: false)` you can override the optionality of the field, it's useful for prisma one-to-one releations where only one side can be requied, so you can set both required in output graphql schema (not handled for inputs and args at the moment).
