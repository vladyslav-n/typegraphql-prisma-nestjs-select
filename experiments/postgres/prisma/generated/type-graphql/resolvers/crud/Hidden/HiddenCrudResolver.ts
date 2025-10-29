import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateHiddenArgs } from "./args/AggregateHiddenArgs";
import { CreateManyAndReturnHiddenArgs } from "./args/CreateManyAndReturnHiddenArgs";
import { CreateManyHiddenArgs } from "./args/CreateManyHiddenArgs";
import { CreateOneHiddenArgs } from "./args/CreateOneHiddenArgs";
import { DeleteManyHiddenArgs } from "./args/DeleteManyHiddenArgs";
import { DeleteOneHiddenArgs } from "./args/DeleteOneHiddenArgs";
import { FindFirstHiddenArgs } from "./args/FindFirstHiddenArgs";
import { FindFirstHiddenOrThrowArgs } from "./args/FindFirstHiddenOrThrowArgs";
import { FindManyHiddenArgs } from "./args/FindManyHiddenArgs";
import { FindUniqueHiddenArgs } from "./args/FindUniqueHiddenArgs";
import { FindUniqueHiddenOrThrowArgs } from "./args/FindUniqueHiddenOrThrowArgs";
import { GroupByHiddenArgs } from "./args/GroupByHiddenArgs";
import { UpdateManyHiddenArgs } from "./args/UpdateManyHiddenArgs";
import { UpdateOneHiddenArgs } from "./args/UpdateOneHiddenArgs";
import { UpsertOneHiddenArgs } from "./args/UpsertOneHiddenArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Hidden } from "../../../models/Hidden";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateHidden } from "../../outputs/AggregateHidden";
import { CreateManyAndReturnHidden } from "../../outputs/CreateManyAndReturnHidden";
import { HiddenGroupBy } from "../../outputs/HiddenGroupBy";

@TypeGraphQL.Resolver(_of => Hidden)
export class HiddenCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateHidden, {
    nullable: false
  })
  async aggregateHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateHiddenArgs) args: AggregateHiddenArgs): Promise<AggregateHidden> {
    return getPrismaFromContext(ctx).hidden.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyHiddenArgs) args: CreateManyHiddenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnHidden], {
    nullable: false
  })
  async createManyAndReturnHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnHiddenArgs) args: CreateManyAndReturnHiddenArgs): Promise<CreateManyAndReturnHidden[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Hidden, {
    nullable: false
  })
  async createOneHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneHiddenArgs) args: CreateOneHiddenArgs): Promise<Hidden> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyHiddenArgs) args: DeleteManyHiddenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Hidden, {
    nullable: true
  })
  async deleteOneHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneHiddenArgs) args: DeleteOneHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Hidden, {
    nullable: true
  })
  async findFirstHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstHiddenArgs) args: FindFirstHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Hidden, {
    nullable: true
  })
  async findFirstHiddenOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstHiddenOrThrowArgs) args: FindFirstHiddenOrThrowArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Hidden], {
    nullable: false
  })
  async hiddens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyHiddenArgs) args: FindManyHiddenArgs): Promise<Hidden[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Hidden, {
    nullable: true
  })
  async hidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueHiddenArgs) args: FindUniqueHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Hidden, {
    nullable: true
  })
  async getHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueHiddenOrThrowArgs) args: FindUniqueHiddenOrThrowArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [HiddenGroupBy], {
    nullable: false
  })
  async groupByHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByHiddenArgs) args: GroupByHiddenArgs): Promise<HiddenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyHiddenArgs) args: UpdateManyHiddenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Hidden, {
    nullable: true
  })
  async updateOneHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneHiddenArgs) args: UpdateOneHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Hidden, {
    nullable: false
  })
  async upsertOneHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneHiddenArgs) args: UpsertOneHiddenArgs): Promise<Hidden> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
