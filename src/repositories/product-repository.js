const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({
        active: true            
    }, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
   const res = await Product.findOne({
        slug: slug,
        active: true
     }, 'title descripiton price slug tags')
     return res;
}

exports.getById = async(id) => {
   const res = await Product.findById(id);
   return res;
}

exports.getByTag = async(tag) => {
    const res = await Product.find({
        tags: tag,
        active: true
     }, 'tittle descripiton price slug tags');
    return res;
}

exports.create = async(data) => {
    const produto = new Product(data);
    await produto.save()
}

exports.update = async(id, data) => {
   await Product.findByIdAndUpdate(id, {
        $set: {
            tittle: data.title,
            descripiton: data.descripiton,
            price: data.price,
            slug: data.slug
        }
    })
}

exports.delete = async(id) => {
    await Product.findByIdAndRemove(id);
}
