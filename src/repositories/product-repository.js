const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
        return Product.find({
            active: true            
        }, 'title price slug')
}

exports.getBySlug = (slug) => {
   return Product.findOne({
        slug: slug,
        active: true
     }, 'tittle descripiton price slug tags')
}

exports.getById = (id) => {
   return Product.findOne({
        slug: id,
        active: true
     })
}

exports.getByTag = (tag) => {
    return Product.find({
        slug: tag,
        active: true
     }, 'tittle descripiton price slug tags')
}

exports.create = (data) => {
    const produto = new Product(data);
    return produto.save()
}

exports.update = (id, data) => {
   return Product.findByIdAndUpdate(id, {
        $set: {
            tittle: data.tittle,
            descripiton: data.descripiton,
            price: data.price,
            slug: data.slug
        }
    })
}

exports.delete = (id) => {
    return Product.findByIdAndRemove(id);
}
