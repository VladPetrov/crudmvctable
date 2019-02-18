using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class AddTransactionFiles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Files_Transactions_TransactionId",
                table: "Files");

            migrationBuilder.DropIndex(
                name: "IX_Files_TransactionId",
                table: "Files");

            migrationBuilder.DropColumn(
                name: "TransactionId",
                table: "Files");

            migrationBuilder.CreateTable(
                name: "TransactionFiles",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    DeletedDate = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Guid = table.Column<string>(nullable: true),
                    RowVersion = table.Column<byte[]>(rowVersion: true, nullable: true),
                    TransactionId = table.Column<long>(nullable: false),
                    FilePreviewId = table.Column<long>(nullable: true),
                    FileId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TransactionFiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TransactionFiles_Files_FileId",
                        column: x => x.FileId,
                        principalTable: "Files",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TransactionFiles_Files_FilePreviewId",
                        column: x => x.FilePreviewId,
                        principalTable: "Files",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_TransactionFiles_Transactions_TransactionId",
                        column: x => x.TransactionId,
                        principalTable: "Transactions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TransactionFiles_FileId",
                table: "TransactionFiles",
                column: "FileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TransactionFiles_FilePreviewId",
                table: "TransactionFiles",
                column: "FilePreviewId",
                unique: true,
                filter: "[FilePreviewId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_TransactionFiles_TransactionId",
                table: "TransactionFiles",
                column: "TransactionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TransactionFiles");

            migrationBuilder.AddColumn<long>(
                name: "TransactionId",
                table: "Files",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Files_TransactionId",
                table: "Files",
                column: "TransactionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Files_Transactions_TransactionId",
                table: "Files",
                column: "TransactionId",
                principalTable: "Transactions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
