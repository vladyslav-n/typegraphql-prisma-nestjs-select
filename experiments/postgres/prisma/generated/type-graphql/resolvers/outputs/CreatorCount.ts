import * as TypeGraphQL from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCountLikesArgs } from "./args/CreatorCountLikesArgs";
import { CreatorCountProblemsArgs } from "./args/CreatorCountProblemsArgs";

@TypeGraphQL.ObjectType("CreatorCount", {})
export class CreatorCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likes!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  problems!: number;
}
