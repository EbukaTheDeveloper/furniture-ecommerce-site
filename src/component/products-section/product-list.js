const productList = [
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_600/v1681559570/d9c1609b151f4904b9842f43b1dec58c_dayiyj.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681559570/d9c1609b151f4904b9842f43b1dec58c_dayiyj.png 300w,https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_600/v1681559570/d9c1609b151f4904b9842f43b1dec58c_dayiyj.png w_600, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_900/v1681559570/d9c1609b151f4904b9842f43b1dec58c_dayiyj.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_1200/v1681559570/d9c1609b151f4904b9842f43b1dec58c_dayiyj.png 1200w',
        productName: 'Eero Aarnio Ball',
        price: '$500',
        productType: 'chair',
        width: '200',
        height: '200',
        className: 'product-img chair-img1'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_600/v1681559433/b62afcfe1f5f4fd486ce806a9968752a_mxpef8.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681559433/b62afcfe1f5f4fd486ce806a9968752a_mxpef8.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_600/v1681559433/b62afcfe1f5f4fd486ce806a9968752a_mxpef8.png 600w,https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_900/v1681559433/b62afcfe1f5f4fd486ce806a9968752a_mxpef8.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_1200/v1681559433/b62afcfe1f5f4fd486ce806a9968752a_mxpef8.png 1200w',
        productName: 'Ramen Stool',
        price: '$400',
        productType: 'chair',
        width: '200',
        height: '200',
        className: 'product-img chair-img2'
    },
    /**{
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,q_auto,f_auto,w_300/v1681560909/pexels-hormel-bed6_l7khxu.jpg',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,q_auto,f_auto,w_300/v1681560909/pexels-hormel-bed6_l7khxu.jpg 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_600/v1681560909/pexels-hormel-bed6_l7khxu.jpg 600w,https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_900/v1681560909/pexels-hormel-bed6_l7khxu.jpg 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_1200/v1681560909/pexels-hormel-bed6_l7khxu.jpg 1200w',
        productName: 'Bed',
        price: '$400',
        productType: 'bed',
        width: '200',
        height: '250',
        className: 'product-img bed-img1'
    },**/
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681559391/0993431cb4574f4dbe6e11cff4771690_jdvsdm.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681559391/0993431cb4574f4dbe6e11cff4771690_jdvsdm.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_600/v1681559391/0993431cb4574f4dbe6e11cff4771690_jdvsdm.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_900/v1681559391/0993431cb4574f4dbe6e11cff4771690_jdvsdm.png, 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_1200/v1681559391/0993431cb4574f4dbe6e11cff4771690_jdvsdm.png 1200w',
        productName: 'Chair',
        price: '$300',
        productType: 'chair',
        width: '130',
        height: '109',
        className: 'product-img chair-img3'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681565042/2ae29e3f54b540e4ac20a9f7c7c2a8aa_zjrar2.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681565042/2ae29e3f54b540e4ac20a9f7c7c2a8aa_zjrar2.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_600/v1681565042/2ae29e3f54b540e4ac20a9f7c7c2a8aa_zjrar2.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_900/v1681565042/2ae29e3f54b540e4ac20a9f7c7c2a8aa_zjrar2.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_1200/v1681565042/2ae29e3f54b540e4ac20a9f7c7c2a8aa_zjrar2.png 1200w',
        productName: 'Porada',
        price: '$100',
        productType: 'table',
        width: '200',
        height: '180',
        className: 'product-img table-img1'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681559366/9124f1224c384c9c987b8cb01d0f2e7a_s78n3q.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681559366/9124f1224c384c9c987b8cb01d0f2e7a_s78n3q.png 300w,https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_600/v1681559366/9124f1224c384c9c987b8cb01d0f2e7a_s78n3q.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_900/v1681559366/9124f1224c384c9c987b8cb01d0f2e7a_s78n3q.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_1200/v1681559366/9124f1224c384c9c987b8cb01d0f2e7a_s78n3q.png 1200w',
        productName: 'Chair',
        price: '$150',
        productType: 'chair',
        width: '200',
        height: '200',
        className: 'product-img chair-img4'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681559309/0bc325b93f0f4e368c6330167d11e8bd_koobwm.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_300/v1681559309/0bc325b93f0f4e368c6330167d11e8bd_koobwm.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_600/v1681559309/0bc325b93f0f4e368c6330167d11e8bd_koobwm.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_900/v1681559309/0bc325b93f0f4e368c6330167d11e8bd_koobwm.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,e_bgremoval,f_auto,q_auto,w_1200/v1681559309/0bc325b93f0f4e368c6330167d11e8bd_koobwm.png 1200w',
        productName: 'Stool',
        price: '$80',
        productType: 'chair',
        width: '200',
        height: '170',
        className: 'product-img chair-img5'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851508/28-chair-png-image_l95c17.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851508/28-chair-png-image_l95c17.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_600/v1681851508/28-chair-png-image_l95c17.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_900/v1681851508/28-chair-png-image_l95c17.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_1200/v1681851508/28-chair-png-image_l95c17.png 1200w',
        productName: 'Chair',
        price: '$50',
        productType: 'chair',
        width: '100',
        height: '88',
        className: 'product-img chair-img6'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851487/19-sofa-png-image_n6lb0u.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851487/19-sofa-png-image_n6lb0u.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_600/v1681851487/19-sofa-png-image_n6lb0u.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_900/v1681851487/19-sofa-png-image_n6lb0u.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_1200/v1681851487/19-sofa-png-image_n6lb0u.png 1200w',
        productName: 'Sofa',
        price: '$80',
        productType: 'sofa',
        width: '200',
        height: '98',
        className: 'product-img sofa-img1'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851467/14-red-sofa-png-image_cjclyn.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851467/14-red-sofa-png-image_cjclyn.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_600/v1681851467/14-red-sofa-png-image_cjclyn.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_900/v1681851467/14-red-sofa-png-image_cjclyn.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_1200/v1681851467/14-red-sofa-png-image_cjclyn.png 1200w',
        productName: 'Red Sofa',
        price: '$80',
        productType: 'sofa',
        width: '200',
        height: '98',
        className: 'product-img sofa-img2'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851435/13-wooden-table-png-image_lyi7b9.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851435/13-wooden-table-png-image_lyi7b9.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_600/v1681851435/13-wooden-table-png-image_lyi7b9.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_900/v1681851435/13-wooden-table-png-image_lyi7b9.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_1200/v1681851435/13-wooden-table-png-image_lyi7b9.png 1200w',
        productName: 'Wooden Table',
        price: '$50',
        productType: 'table',
        width: '170',
        height: '100',
        className: 'product-img table-img2'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851414/12-table-png-image_mhdcea.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851414/12-table-png-image_mhdcea.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_600/v1681851414/12-table-png-image_mhdcea.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_900/v1681851414/12-table-png-image_mhdcea.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_1200/v1681851414/12-table-png-image_mhdcea.png 1200w',
        productName: 'Silver Table',
        price: '$50',
        productType: 'table',
        width: '150',
        height: '150',
        className: 'product-img table-img3'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851392/12-sofa-png-image_v88pak.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851392/12-sofa-png-image_v88pak.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_600/v1681851392/12-sofa-png-image_v88pak.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_900/v1681851392/12-sofa-png-image_v88pak.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_1200/v1681851392/12-sofa-png-image_v88pak.png 1200w',
        productName: 'Yellow Sofa',
        price: '$80',
        productType: 'sofa',
        width: '222',
        height: '98',
        className: 'product-img sofa-img3'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851364/12-chair-png-image_rdzpuk.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851364/12-chair-png-image_rdzpuk.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_600/v1681851364/12-chair-png-image_rdzpuk.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_900/v1681851364/12-chair-png-image_rdzpuk.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_1200/v1681851364/12-chair-png-image_rdzpuk.png 1200w',
        productName: 'Chair',
        price: '$80',
        productType: 'chair',
        width: '100',
        height: '149',
        className: 'product-img chair-img7'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851333/11-table-png-image_cqug8x.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_300/v1681851333/11-table-png-image_cqug8x.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_600/v1681851333/11-table-png-image_cqug8x.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_900/v1681851333/11-table-png-image_cqug8x.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_auto,w_1200/v1681851333/11-table-png-image_cqug8x.png 1200w',
        productName: 'Table',
        price: '$50',
        productType: 'table',
        width: '130',
        height: '182',
        className: 'product-img table-img4'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851302/11-sofa-png-image_qxq8w3.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851302/11-sofa-png-image_qxq8w3.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_600/v1681851302/11-sofa-png-image_qxq8w3.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_900/v1681851302/11-sofa-png-image_qxq8w3.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_1200/v1681851302/11-sofa-png-image_qxq8w3.png 1200w',
        productName: 'Sofa',
        price: '$100',
        productType: 'sofa',
        width: '200',
        height: '192',
        className: 'product-img sofa-img4'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851280/11-chair-png-image_bgami5.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851280/11-chair-png-image_bgami5.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600/v1681851280/11-chair-png-image_bgami5.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900/v1681851280/11-chair-png-image_bgami5.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200/v1681851280/11-chair-png-image_bgami5.png 1200w',
        productName: 'Chair',
        price: '$60',
        productType: 'chair',
        width: '90',
        height: '171',
        className: 'product-img chair-img8'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851264/9-sofa-png-image_shojls.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851264/9-sofa-png-image_shojls.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_600/v1681851264/9-sofa-png-image_shojls.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_900/v1681851264/9-sofa-png-image_shojls.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_1222/v1681851264/9-sofa-png-image_shojls.png 1222w',
        productName: 'Green Sofa',
        price: '$100',
        productType: 'sofa',
        width: '222',
        height: '97',
        className: 'product-img sofa-img5'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851243/8-red-sofa-png-image_joas9d.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851243/8-red-sofa-png-image_joas9d.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_600/v1681851243/8-red-sofa-png-image_joas9d.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_900/v1681851243/8-red-sofa-png-image_joas9d.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_1200/v1681851243/8-red-sofa-png-image_joas9d.png 1200w',
        productName: 'Red Sofa',
        price: '$80',
        productType: 'sofa',
        width: '200',
        height: '98',
        className: 'product-img sofa-img6'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851219/7-chair-png-image_r4hsvb.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851219/7-chair-png-image_r4hsvb.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_600/v1681851219/7-chair-png-image_r4hsvb.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_900/v1681851219/7-chair-png-image_r4hsvb.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_1200/v1681851219/7-chair-png-image_r4hsvb.png 1200w',
        productName: 'Chair',
        price: '$75',
        productType: 'chair',
        width: '100',
        height: '98',
        className: 'product-img chair-img9'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851199/6-black-sofa-png-image_exkapq.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851199/6-black-sofa-png-image_exkapq.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_600/v1681851199/6-black-sofa-png-image_exkapq.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_900/v1681851199/6-black-sofa-png-image_exkapq.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_1200/v1681851199/6-black-sofa-png-image_exkapq.png 1200w',
        productName: 'Black sofa',
        price: '$80',
        productType: 'sofa',
        width: '259',
        height: '98',
        className: 'product-img sofa-img7'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851180/5-table-png-image_vogfoj.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851180/5-table-png-image_vogfoj.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681851180/5-table-png-image_vogfoj.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681851180/5-table-png-image_vogfoj.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200,q_80/v1681851180/5-table-png-image_vogfoj.png 1200w',
        productName: 'Table',
        price: '$40',
        productType: 'table',
        width: '151',
        height: '98',
        className: 'product-img table-img5'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851162/5-sofa-png-image_yaxjll.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851162/5-sofa-png-image_yaxjll.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681851162/5-sofa-png-image_yaxjll.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681851162/5-sofa-png-image_yaxjll.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200,q_80/v1681851162/5-sofa-png-image_yaxjll.png 1200w',
        productName: 'Sofa',
        price: '$100',
        productType: 'sofa',
        width: '259',
        height: '98',
        className: 'product-img sofa-img8'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,h_98,w_300,q_80/v1681851138/4-sofa-png-image_ftjcvk.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851138/4-sofa-png-image_ftjcvk.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681851138/4-sofa-png-image_ftjcvk.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681851138/4-sofa-png-image_ftjcvk.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851138/4-sofa-png-image_ftjcvk.png 1200w',
        productName: 'Sofa',
        price: '$60',
        productType: 'sofa',
        width: '224',
        height: '98',
        className: 'product-img sofa-img9'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851120/3-orange-sofa-png-image_fr2uuq.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851120/3-orange-sofa-png-image_fr2uuq.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681851120/3-orange-sofa-png-image_fr2uuq.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681851120/3-orange-sofa-png-image_fr2uuq.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200,q_80/v1681851120/3-orange-sofa-png-image_fr2uuq.png 1200w',
        productName: 'Orange Sofa',
        price: '$85',
        productType: 'sofa',
        width: '201',
        height: '98',
        className: 'product-img sofa-img10'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851100/3-chair-png-image_hig9vt.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851100/3-chair-png-image_hig9vt.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681851100/3-chair-png-image_hig9vt.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681851100/3-chair-png-image_hig9vt.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200,q_80/v1681851100/3-chair-png-image_hig9vt.png 1200w',
        productName: 'Chair',
        price: '$50',
        productType: 'chair',
        width: '200',
        height: '149',
        className: 'product-img chair-img10'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851082/3-armchair-png-image_ghydbn.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851082/3-armchair-png-image_ghydbn.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681851082/3-armchair-png-image_ghydbn.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681851082/3-armchair-png-image_ghydbn.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200,q_80/v1681851082/3-armchair-png-image_ghydbn.png 1200w',
        productName: 'Arm Chair',
        price: '$65',
        productType: 'chair',
        width: '150',
        height: '150',
        className: 'product-img chair-img11'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851066/2-wooden-table-png-image_atnmby.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851066/2-wooden-table-png-image_atnmby.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681851066/2-wooden-table-png-image_atnmby.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681851066/2-wooden-table-png-image_atnmby.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200,q_80/v1681851066/2-wooden-table-png-image_atnmby.png 1200w',
        productName: 'Wooden Table',
        price: '$78',
        productType: 'table',
        width: '133',
        height: '98',
        className: 'product-img table-img6'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851050/2-sofa-png-image_gef89o.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851050/2-sofa-png-image_gef89o.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681851050/2-sofa-png-image_gef89o.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681851050/2-sofa-png-image_gef89o.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200,q_80/v1681851050/2-sofa-png-image_gef89o.png 1200w',
        productName: 'Sofa',
        price: '$200',
        productType: 'sofa',
        width: '171',
        height: '98',
        className: 'product-img sofa-img11'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,q_80,w_300/v1681851010/2-chair-png-image_mycqix.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681851010/2-chair-png-image_mycqix.png, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681851010/2-chair-png-image_mycqix.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681851010/2-chair-png-image_mycqix.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200,q_80/v1681851010/2-chair-png-image_mycqix.png 1200w',
        productName: 'Chair',
        price: '$73',
        productType: 'chair',
        width: '95',
        height: '200',
        className: 'product-img chair-img12'
    },
    {
        imgSrc: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681850964/1-red-sofa-png-image_nectws.png',
        srcset: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_300,q_80/v1681850964/1-red-sofa-png-image_nectws.png 300w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_600,q_80/v1681850964/1-red-sofa-png-image_nectws.png 600w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_900,q_80/v1681850964/1-red-sofa-png-image_nectws.png 900w, https://res.cloudinary.com/dvcx5l1vb/image/upload/c_scale,f_auto,w_1200,q_80/v1681850964/1-red-sofa-png-image_nectws.png 1200w',
        productName: 'Red Sofa',
        price: '$89',
        productType: 'sofa',
        width: '180',
        height: '100',
        className: 'product-img sofa-img12'
    },
]

export default productList;