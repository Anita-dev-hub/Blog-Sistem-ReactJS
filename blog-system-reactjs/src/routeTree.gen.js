
import { Route as rootRouteImport } from "./routes/root";
import { Route as IndexRouteImport } from "./routes/index";
import { Route as AuthenticatedRouteImport } from "./routes/authenticated/route";
import { Route as AboutRouteImport } from "./routes/about";
import { Route as ContactRouteImport } from "./routes/contact";
import { Route as LoginRouteImport } from "./routes/login";
import { Route as NewPostRouteImport } from "./routes/_authenticated/new";
import { Route as BlogIndexRouteImport } from "./routes/blog.index";
import { Route as BlogIdRouteImport } from "./routes/blog.$id";
import { Route as EditPostRouteImport } from "./routes/authenticated/edit.$id";

const IndexRoute = IndexRouteImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRouteImport,
});

const AuthenticatedRoute = AuthenticatedRouteImport.update({
  id: "/_authenticated",
  getParentRoute: () => rootRouteImport,
});

const AboutRoute = AboutRouteImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => rootRouteImport,
});

const ContactRoute = ContactRouteImport.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => rootRouteImport,
});

const LoginRoute = LoginRouteImport.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => rootRouteImport,
});

const NewPostRoute = NewPostRouteImport.update({
  id: "/new",
  path: "/new",
  getParentRoute: () => AuthenticatedRoute,
});

const BlogIndexRoute = BlogIndexRouteImport.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => rootRouteImport,
});

const BlogIdRoute = BlogIdRouteImport.update({
  id: "/blog/$id",
  path: "/blog/$id",
  getParentRoute: () => rootRouteImport,
});

const EditPostRoute = EditPostRouteImport.update({
  id: "/edit/$id",
  path: "/edit/$id",
  getParentRoute: () => AuthenticatedRoute,
});

const AuthenticatedChildren = {
  NewPostRoute,
  EditPostRoute,
};

const AuthenticatedRouteWithChildren =
  AuthenticatedRoute._addFileChildren(AuthenticatedChildren);

const rootRouteChildren = {
  IndexRoute,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  AboutRoute,
  ContactRoute,
  LoginRoute,
  BlogIndexRoute,
  BlogIdRoute,
};

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren);
