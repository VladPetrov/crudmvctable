<h1>#CRUD MVC Table</h1>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<BODY LANG="en-US" DIR="LTR">
<P STYLE="text-indent: 0.2in; margin-bottom: 0in"><FONT SIZE=3>CRUD
MVC Table</FONT></P>
<P STYLE="text-indent: 0.2in; margin-bottom: 0in"><FONT SIZE=3>Lightweight
ASP.NET Core MVC framework for fast templating.   </FONT>
</P>
<P STYLE="text-indent: 0.2in; margin-bottom: 0in"><BR>
</P>
<P STYLE="text-indent: 0.2in; margin-bottom: 0in"><FONT SIZE=3>Allows
to create data tables with paging, filtering, searching and CRUD
using a few lines of code. </FONT>
</P>
<P STYLE="text-indent: 0.2in; margin-bottom: 0in"><FONT SIZE=3><B>Technologies
used:</B></FONT></P>
<UL>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>ASP.NET Core 2.1</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Typescript 3.3</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>AutoMapper 6.2.2</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Bootstrap or Metronic
	layout. Metronic template is not free, license can be bought <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=mr4k&amp;gclid=Cj0KCQiAtP_iBRDGARIsAEWJA8hHjkOJqMdp2SoXjxDWdZw7i0W8XJclXoWVIENeh14KJBMU19DT6xAaAttHEALw_wcB">here</a> 
	</FONT></P>
</UL>
<P STYLE="margin-left: 0.28in; margin-bottom: 0in"><BR>
</P>
<P STYLE="text-indent: 0.2in; margin-bottom: 0in"><FONT SIZE=3><B>Implemented
features:</B></FONT></P>
<UL>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Dependency injection
	using LightInject</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Configuration
	provider – injectable wrapper around app config</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Entity Framework Code
	First, </FONT><FONT COLOR="#000000">
	Sql	Database provider + Inmemory provider
	</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Database migration
	manager – applies migrations based on configuration</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Database Seed manager
	– seeds data bases on configuration, supports order of seed data
	chunks</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Logging using Serilog
	</FONT>
	</P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>AutoMapper</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Generic CSV and Excel
	parsers.</FONT></P>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Test project. Test
	fixture automatically starts IoC with all application services. Easy
	to add new ro replace existing service implementations, add custom
	mappings. Easy to switch between Sql
	Database provider and Inmemory provider.</FONT></P>
</UL>
<P STYLE="text-indent: 0.2in; margin-bottom: 0in"><BR>
</P>
<P STYLE="text-indent: 0.2in; margin-bottom: 0in"><FONT SIZE=3><B>To
create table with filtering/sorting + CRUD out of the box 10 steps
are required:</B></FONT></P>
<OL>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Create code first
	model, inherited form EntityBase class:</FONT></P>
</OL>
<P STYLE="text-indent: 0.45in; margin-bottom: 0in"><BR>
</P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><A NAME="_Hlk697283"></A>
<FONT COLOR="#0000ff">    <FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>class</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>Project</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
: EntityBase</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>{</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>string</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Name { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>string</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Acronym { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
DateTime StartDate { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
DateTime EndDate { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>long</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Budget { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in"><FONT COLOR="#000000">    <FONT FACE="Consolas, serif"><FONT SIZE=3>}</FONT></FONT></FONT></P>
<P STYLE="margin-left: 0.45in; margin-bottom: 0in"><BR>
</P>
<OL START=2>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Create DTO model for
	the table and domain model for CRUD operations. Models must be
	inherited from DomainBase class:</FONT></P>
</OL>
<P STYLE="margin-bottom: 0in"><BR>
</P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#0000ff">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>class</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>ProjectDto</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
: DomainBase</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>{</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>string</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Name { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><A NAME="_GoBack"></A>
<FONT COLOR="#000000">        </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>string</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Acronym { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
DateTime StartDate { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
DateTime EndDate { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>long</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Budget { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in"><FONT COLOR="#000000">    <FONT FACE="Consolas, serif"><FONT SIZE=3>}</FONT></FONT></FONT></P>
<P STYLE="margin-left: 0.45in; margin-bottom: 0in"><BR>
</P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#0000ff">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>class</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>ProjectDomain</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
: DomainBase</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>{</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>string</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Name { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>string</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Acronym { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
DateTime StartDate { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
DateTime EndDate { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>long</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Budget { </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>get</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>set</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;
}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in"><FONT COLOR="#000000">    <FONT FACE="Consolas, serif"><FONT SIZE=3>}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in"><BR>
</P>
<OL START=3>
	<LI><P STYLE="margin-bottom: 0in"><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>Add
	Mappings:</FONT></FONT></FONT></P>
</OL>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>CreateMap&lt;Project,
ProjectDto&gt;();</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>CreateMap&lt;Project,
ProjectDomain&gt;();</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in"><FONT COLOR="#000000">   
<FONT FACE="Consolas, serif"><FONT SIZE=3>CreateMap&lt;ProjectDomain,
Project&gt;();</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in"><BR>
</P>
<OL START=4>
	<LI><P STYLE="margin-bottom: 0in"><FONT SIZE=3>Repository interface
	and its implementation:</FONT></P>
</OL>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#0000ff">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>interface</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>IProjectRepository</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
: IGenericCrudRepository&lt;ProjectDto, ProjectDomain&gt;</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>{}</FONT></FONT></FONT></P>
<P STYLE="margin-left: 0.2in; margin-bottom: 0in; line-height: 100%"><BR>
</P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#0000ff">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>class</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>ProjectRepository</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
: GenericCrudRepository&lt;DataBase, Project, ProjectDto,
ProjectDomain&gt;, IProjectRepository</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>{</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
ProjectRepository(DataBase context) : </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>base</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>(context)
{}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>}</FONT></FONT></FONT></P>
<P STYLE="margin-left: 0.2in; margin-bottom: 0in; line-height: 100%"><BR>
</P>
<OL START=5>
	<LI><P STYLE="margin-bottom: 0in; line-height: 100%"><FONT SIZE=3>Service
	interface and its implementation:</FONT></P>
</OL>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#0000ff">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>interface</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>IProjectService</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
: IGenericCrudService&lt;ProjectDto, ProjectDomain&gt; {}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><BR>
</P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#0000ff">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>class</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>ProjectService</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
: GenericCrudServise&lt;ProjectDto, ProjectDomain&gt;,
IProjectService</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>{</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
ProjectService(IProjectRepository repository) : </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>base</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>(repository)
{}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>}</FONT></FONT></FONT></P>
<P STYLE="margin-left: 0.2in; margin-bottom: 0in; line-height: 100%"><BR>
</P>
<OL START=6>
	<LI><P STYLE="margin-bottom: 0in; line-height: 100%"><FONT SIZE=3>Add
	MVC Controller:</FONT></P>
</OL>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#0000ff">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>class</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>ProjectsController</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
: MasterPageCrudController&lt;ProjectDto, ProjectDomain&gt;</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>{</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
ProjectsController(IProjectService service) : </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>base</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>(service)
{}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>protected</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>override</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>string</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Title =&gt; </FONT></FONT></FONT><FONT COLOR="#a31515"><FONT FACE="Consolas, serif"><FONT SIZE=3>&quot;Projects&quot;</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>;</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><BR>
</P>
<OL START=7>
	<LI><P STYLE="margin-bottom: 0in; line-height: 100%"><FONT SIZE=3>Provide
	table configuration. This is done by adding _TableConfig.cshtml
	view:</FONT></P>
</OL>
<P STYLE="margin-left: 0.2in; margin-bottom: 0in; line-height: 100%"><BR>
</P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3><SPAN STYLE="background: #ffff00">@model</SPAN></FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
TableViewModel</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3><SPAN STYLE="background: #ffff00">@{</SPAN></FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>var</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
descriptor = TableBuilder&lt;ProjectDto&gt;.CreateNew()</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddColumn(x =&gt;
x.Name)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddColumn(x =&gt;
x.Acronym)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddColumn(x =&gt;
x.Budget, </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>new</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
RowOptions{ColumnRenderer = </FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>new</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
EurRenderer()})</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddColumn(x =&gt;
x.StartDate)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddColumn(x =&gt;
x.EndDate)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       <FONT FACE="Consolas, serif"><FONT SIZE=3>.Build();</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3><SPAN STYLE="background: #ffff00">}</SPAN></FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3><SPAN STYLE="background: #ffff00">@</SPAN></FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>await</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Html.TableAsync(Model, descriptor)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><BR>
</P>
<OL START=8>
	<LI><P STYLE="margin-bottom: 0in; line-height: 100%"><FONT SIZE=3>Create
	form descriptor for Create/Edit operations:</FONT></P>
</OL>
<P STYLE="margin-bottom: 0in; line-height: 100%"><BR>
</P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#0000ff">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>static</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>class</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>ProjectFormDescriptor</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>{</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>public</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>static</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
FormDescriptor Get(</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>bool</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
isReadonly)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       <FONT FACE="Consolas, serif"><FONT SIZE=3>{</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
           </FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>return</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
FormBuilder&lt;ProjectDomain&gt;.CreateNew(isReadonly)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
               <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddItem(x
=&gt; x.Name)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
               <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddItem(x
=&gt; x.Acronym)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
               <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddItem(x
=&gt; x.Budget)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
               <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddItem(x
=&gt; x.StartDate)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
               <FONT FACE="Consolas, serif"><FONT SIZE=3>.AddItem(x
=&gt; x.EndDate)</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
               <FONT FACE="Consolas, serif"><FONT SIZE=3>.Build();</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
       <FONT FACE="Consolas, serif"><FONT SIZE=3>}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000">
   <FONT FACE="Consolas, serif"><FONT SIZE=3>}</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><BR>
</P>
<OL START=9>
	<LI><P STYLE="margin-bottom: 0in; line-height: 100%"><FONT SIZE=3>Add
	_DisplayModel.cshtml for Preview/Delele:</FONT></P>
</OL>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3><SPAN STYLE="background: #ffff00">@</SPAN></FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>await</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Html.FormTwoColumnsAsync(</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>ProjectFormDescriptor</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>.Get(</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>true</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>))</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><BR>
</P>
<OL START=10>
	<LI><P STYLE="margin-bottom: 0in; line-height: 100%"><FONT SIZE=3>Add
	_EditModel.cshtml for Create/Edit</FONT></P>
</OL>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3><SPAN STYLE="background: #ffff00">@</SPAN></FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>await</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>
Html.FormTwoColumnsAsync(</FONT></FONT></FONT><FONT COLOR="#2b91af"><FONT FACE="Consolas, serif"><FONT SIZE=3>ProjectFormDescriptor</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>.Get(</FONT></FONT></FONT><FONT COLOR="#0000ff"><FONT FACE="Consolas, serif"><FONT SIZE=3>false</FONT></FONT></FONT><FONT COLOR="#000000"><FONT FACE="Consolas, serif"><FONT SIZE=3>))</FONT></FONT></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><BR>
</P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><FONT SIZE=3></FONT></P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><BR>
</P>
<P STYLE="margin-bottom: 0in; line-height: 100%"><BR>
</P>
</BODY>
</HTML>
