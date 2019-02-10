# crudmvctable

<h1>CRUD MVC Table</h1>

Lightweight ASP.NET Core MVC framework for fast templating.

CRUD MVC Table
Lightweight ASP.NET Core MVC framework for fast templating.   

Allows to create data tables with paging, filtering, searching and CRUD using a few lines of code. 
Technologies used:
-	ASP.NET Core 2.1
-	Typescript 3.3
-	AutoMapper 6.2.2
-	Bootstrap or Metronic layout. Metronic template is not free, license can be bought here https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=mr4k&gclid=Cj0KCQiAtP_iBRDGARIsAEWJA8hHjkOJqMdp2SoXjxDWdZw7i0W8XJclXoWVIENeh14KJBMU19DT6xAaAttHEALw_wcB

Implemented features:
-	Dependency injection using LightInject
-	Configuration provider – injectable wrapper around app config
-	Entity Framework Code First, Sql Database provider + Inmemory provider
-	Database migration manager – applies migrations based on configuration
-	Database Seed manager – seeds data bases on configuration, supports order of seed data chunks
-	Logging using Serilog 
-	AutoMapper
-	Generic CSV and Excel parsers.
-	Test project. Test fixture automatically starts IoC with all application services. Easy to add new ro replace existing service implementations, add custom mappings. Easy to switch between Sql Database provider and Inmemory provider.

To create table with filtering/sorting + CRUD out of the box 10 steps are required:
1.	Create code first model, inherited form EntityBase class:

    public class Project : EntityBase
    {
        public string Name { get; set; }
        public string Acronym { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public long Budget { get; set; }
    }

2.	Create DTO model for the table and domain model for CRUD operations. Models must be inherited from DomainBase class:

    public class ProjectDto : DomainBase
    {
        public string Name { get; set; }
        public string Acronym { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public long Budget { get; set; }
    }

    public class ProjectDomain : DomainBase
    {
        public string Name { get; set; }
        public string Acronym { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public long Budget { get; set; }
    }

3.	Add Mappings:
    CreateMap<Project, ProjectDto>();
    CreateMap<Project, ProjectDomain>();
    CreateMap<ProjectDomain, Project>();

4.	Repository interface and its implementation:
    public interface IProjectRepository : IGenericCrudRepository<ProjectDto, ProjectDomain>
    {}

    public class ProjectRepository : GenericCrudRepository<DataBase, Project, ProjectDto, ProjectDomain>, IProjectRepository
    {
        public ProjectRepository(DataBase context) : base(context) {}
    }

5.	Service interface and its implementation:
    public interface IProjectService : IGenericCrudService<ProjectDto, ProjectDomain> {}

    public class ProjectService : GenericCrudServise<ProjectDto, ProjectDomain>, IProjectService
    {
        public ProjectService(IProjectRepository repository) : base(repository) {}
    }

6.	Add MVC Controller:
    public class ProjectsController : MasterPageCrudController<ProjectDto, ProjectDomain>
    {
        public ProjectsController(IProjectService service) : base(service) {}
        protected override string Title => "Projects";
    }

7.	Provide table configuration. This is done by adding _TableConfig.cshtml view:

@model TableViewModel
@{
    var descriptor = TableBuilder<ProjectDto>.CreateNew()
        .AddColumn(x => x.Name)
        .AddColumn(x => x.Acronym)
        .AddColumn(x => x.Budget, new RowOptions{ColumnRenderer = new EurRenderer()})
        .AddColumn(x => x.StartDate)
        .AddColumn(x => x.EndDate)
        .Build();
}
@await Html.TableAsync(Model, descriptor)

8.	Create form descriptor for Create/Edit operations:

    public static class ProjectFormDescriptor
    {
        public static FormDescriptor Get(bool isReadonly)
        {
            return FormBuilder<ProjectDomain>.CreateNew(isReadonly)
                .AddItem(x => x.Name)
                .AddItem(x => x.Acronym)
                .AddItem(x => x.Budget)
                .AddItem(x => x.StartDate)
                .AddItem(x => x.EndDate)
                .Build();
        }
    }

9.	Add _DisplayModel.cshtml for Preview/Delele:
@await Html.FormTwoColumnsAsync(ProjectFormDescriptor.Get(true))

10.	Add _EditModel.cshtml for Create/Edit
@await Html.FormTwoColumnsAsync(ProjectFormDescriptor.Get(false))

Working page can be found here.



