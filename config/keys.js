if (process.env.NODE_ENV === 'production'){
    module.exports=reuire('./prod');
}
else{
    module.exports=reuire('./dev');
}