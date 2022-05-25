import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migrations1651677757715 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "postit",
        columns: [
          { name: "id", type: "uuid" },
          { name: "title", type: "varchar" },
          { name: "description", type: "text" },
          { name: "status", type: "varchar", default: "false" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("postit");
  }
}
