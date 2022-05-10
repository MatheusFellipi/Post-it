import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migrations1651677757715 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "post",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
