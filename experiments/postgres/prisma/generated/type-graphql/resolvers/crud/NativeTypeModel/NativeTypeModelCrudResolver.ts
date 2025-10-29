import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNativeTypeModelArgs } from "./args/AggregateNativeTypeModelArgs";
import { CreateManyAndReturnNativeTypeModelArgs } from "./args/CreateManyAndReturnNativeTypeModelArgs";
import { CreateManyNativeTypeModelArgs } from "./args/CreateManyNativeTypeModelArgs";
import { CreateOneNativeTypeModelArgs } from "./args/CreateOneNativeTypeModelArgs";
import { DeleteManyNativeTypeModelArgs } from "./args/DeleteManyNativeTypeModelArgs";
import { DeleteOneNativeTypeModelArgs } from "./args/DeleteOneNativeTypeModelArgs";
import { FindFirstNativeTypeModelArgs } from "./args/FindFirstNativeTypeModelArgs";
import { FindFirstNativeTypeModelOrThrowArgs } from "./args/FindFirstNativeTypeModelOrThrowArgs";
import { FindManyNativeTypeModelArgs } from "./args/FindManyNativeTypeModelArgs";
import { FindUniqueNativeTypeModelArgs } from "./args/FindUniqueNativeTypeModelArgs";
import { FindUniqueNativeTypeModelOrThrowArgs } from "./args/FindUniqueNativeTypeModelOrThrowArgs";
import { GroupByNativeTypeModelArgs } from "./args/GroupByNativeTypeModelArgs";
import { UpdateManyNativeTypeModelArgs } from "./args/UpdateManyNativeTypeModelArgs";
import { UpdateOneNativeTypeModelArgs } from "./args/UpdateOneNativeTypeModelArgs";
import { UpsertOneNativeTypeModelArgs } from "./args/UpsertOneNativeTypeModelArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNativeTypeModel } from "../../outputs/AggregateNativeTypeModel";
import { CreateManyAndReturnNativeTypeModel } from "../../outputs/CreateManyAndReturnNativeTypeModel";
import { NativeTypeModelGroupBy } from "../../outputs/NativeTypeModelGroupBy";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class NativeTypeModelCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateNativeTypeModel, {
    nullable: false
  })
  async aggregateNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateNativeTypeModelArgs) args: AggregateNativeTypeModelArgs): Promise<AggregateNativeTypeModel> {
    return getPrismaFromContext(ctx).nativeTypeModel.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyNativeTypeModelArgs) args: CreateManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnNativeTypeModel], {
    nullable: false
  })
  async createManyAndReturnNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnNativeTypeModelArgs) args: CreateManyAndReturnNativeTypeModelArgs): Promise<CreateManyAndReturnNativeTypeModel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async createOneNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneNativeTypeModelArgs) args: CreateOneNativeTypeModelArgs): Promise<NativeTypeModel> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyNativeTypeModelArgs) args: DeleteManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async deleteOneNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneNativeTypeModelArgs) args: DeleteOneNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async findFirstNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstNativeTypeModelArgs) args: FindFirstNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async findFirstNativeTypeModelOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstNativeTypeModelOrThrowArgs) args: FindFirstNativeTypeModelOrThrowArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NativeTypeModel], {
    nullable: false
  })
  async nativeTypeModels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyNativeTypeModelArgs) args: FindManyNativeTypeModelArgs): Promise<NativeTypeModel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async nativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueNativeTypeModelArgs) args: FindUniqueNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async getNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueNativeTypeModelOrThrowArgs) args: FindUniqueNativeTypeModelOrThrowArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NativeTypeModelGroupBy], {
    nullable: false
  })
  async groupByNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByNativeTypeModelArgs) args: GroupByNativeTypeModelArgs): Promise<NativeTypeModelGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyNativeTypeModelArgs) args: UpdateManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async updateOneNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneNativeTypeModelArgs) args: UpdateOneNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async upsertOneNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneNativeTypeModelArgs) args: UpsertOneNativeTypeModelArgs): Promise<NativeTypeModel> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
