import { defineField } from "sanity";

const user = {
    name:'user',
    title:'user',
    type:'document',
    fields:[
        defineField({
            name:'isAdmin',
            title:'is Admin',
            type:'boolean',
            description:"chceck user is admin",
            initialValue:false,
            validation:Rule=>Rule.required(),
        }),
        defineField({
            name:'name',
            title:'Name',
            type:'string',
            description:"name of the user",
            readOnly:true,
            validation:Rule=>Rule.required(),
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'url',
        }),
        defineField({
            name:'password',
            type:'string',
            hidden: true,
        }),
        defineField({
            name:'email',
            title:'Email',
            type:'string',
        }),
        defineField({
            name:'emailVerified',
            type:'datetime',
            hidden:true
        }),
        defineField({
            name:'about',
            title:'About',
            type:'text',
            description:'a brief description about user',
        }),
      
    ],

}
export default user;