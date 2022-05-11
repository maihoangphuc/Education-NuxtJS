export default function(context){
    if(!context.store.getters['auth/getIsAuthentication']){
        context.redirect('/login')
    }
}