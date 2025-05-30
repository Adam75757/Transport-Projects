Transport Project loyihasida 

ustoz shu Menda superAdminni username:"SuperAdmin" bilan password:"12345678"
shu SuperAdmindan foydalanishingiz uchun.

men 6 ta modelni yaratdim

staff , transport , permission ,adminPermission ,branch,address modellarini

men staff ni vakolatlariga write,read,delete,put qo'shdim bu degani 
kimdir shu vakolatlarga ega bo'lsa o'ziga o'xshagn staffni o'chiradi update qiladi
malumotlarni ko'raoladi.

lekin u staff branch transport address adminPermission,Permission qo'shaolmaydi sababi u oddiy staff
u admin bo'lishi kerak shunish uchun men

Staffni actions larini modelsni permission.model.js fayilida yozdim

Admin AdminActions larini esa modelsni admin.permissionsda yozdim

Adminga berilgan AdminActionslar: {
     "addPermission", "deletePermission", "changePermission", "allPermissions", "ownPermissions",
    "addAdmin","deleteAdmin",Admin/one/info,Admin/all/info,Adminchange,
    "transports", "addTransport","transport/allInfo", "changeTransport", "deleteTransport",
    "addAddress", "changeAddress", "deleteAddress", "Address", "Address/allInfo",
    "addBranch", "changeBranch", "deleteBranch", "branches", "branch/allInfo"
}
 
 shulardir Hamda men Staffni Staffni hamma stafflarni ko'rishga vakolati bo'lsa ham u faqat o'ziga o'xshagan stafflarni ko'radi


 men Staff uchun To'liq crud qildim qo'shish o'chirish update qilish id bo'yicha qidirish query bo'yicha qildim


 transport bo'yicha esa qo'shish o'chirish yangilash qidiruv id query lar bo'yicha hammasini ko'rish faqat Admin vakolati bo'lsa yoki SuperAdminni ko'radi


 permission qo'shish qildim array sifatida write read qiladi o'chirganda read qilsam arraydan readni o'chiradi yangilash qilsam yangilay di 


 adminPermissions ham action qo'shadi va aytgan actionimi arrayda bersam aynan o'chiradi


 branch ni ham crud qildim get,post,delete,update,query qidiruv


 address  ni ham crud qildim get,post,delete,update,query qidiruv



 Ishlatgan narsalarim:{
    checktoken, middlwareni ichida
    sha256, service papkasida ishlatilgan
    Permission, middlware
    jsonwebtoken, utils,middlware papkalarida
    winston, loger papkasida
    joi, middlware
    AdminPermission, middlware,model
    CustomError  - utilsni ichidagi error.js da
 }


 hamma model uchun to'liq crud permission bordir.


 alohida admin uchun ham crud qildim faqat admin larni crud qiladi.

# Transport-Project
# Transport-Projects
# Transport-Projects
# Transport-Projects
