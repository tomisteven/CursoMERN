//layout
import LayoutAdmin from "../layouts/LayoutAdmin";

//admin pages
import AdminHome from "../pages/Admin";
import AdminSigin from "../pages/Admin/Sigin";



const routes = [
    {
        //cuando se ejecuta la ruta /admin se renderiza el componente LayoutAdmin y se renderiza el componente AdminHome dentro de el layoutAdmin dinamicamente
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                //la ruta seria localhost:3000/admin/
                path: "/admin",
                component: AdminHome,
                exact: true

            },
            {
                //la ruta seria localhost:3000/admin/sigin
                path: "/admin/login",
                component: AdminSigin,
                exact: true
            }
        ]
    }
];


export default routes;