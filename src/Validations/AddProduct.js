export const ProductInfoValidation = (formData) => {
    let errors = {};

    // Expiration date validation
    if (formData.categorySpecification === 1 && !formData.expirationDate) {
        errors.expirationDate = "Expiration date is required";
    }

    if (!formData.productName) {
        errors.productName = "Product Name is required.";
    }

    if (!formData.ndcUpc) {
        errors.ndcUpc = "NDC/UPC is required.";
    }



    if (!formData.categorySpecification) {
        errors.categorySpecification = "Category Specification is required.";
    }

    if (!formData.productCategory) {
        errors.productCategory = "Product Category is required.";
    }

    console.log(formData.states.length, "statessssssss");
    // States validation
    if (formData.states.length <= 0) {
        console.log(formData.states.length, "why");

        errors.states = "At least one state must be selected.";
    }

    return errors;
};



export const ProductPriceValidation = (formData) => {
    let errors = {};

    if (formData.price === null || formData.price === undefined || formData.price <= 0) {
        errors.price = "Price is required and must be greater than 0.";
    }


    if (formData.salePrice > 0) {  // Check for positive sale price
        if (!formData.salePriceForm || formData.salePriceForm.trim() === "") {
            errors.salePriceForm = "Sale price 'from' date is required.";
        }
        if (!formData.salePriceTo || formData.salePriceTo.trim() === "") {
            errors.salePriceTo = "Sale price 'to' date is required.";
        }
    }

    
    if (formData.upnMemberPrice === null || formData.upnMemberPrice === undefined || formData.upnMemberPrice <= 0) {
        errors.upnMemberPrice = "Upn Member Price is required and must be greater than 0.";
    } else {
        if (formData.upnMemberPrice >= formData.price) {
            errors.upnMemberPrice = "Upn Member Price must be less than the price.";
        }
        if (formData.salePrice > 0 && formData.upnMemberPrice >= formData.salePrice) {
            errors.upnMemberPrice = "Upn Member Price must be less than the sale price.";
        }
    }

    if (formData.amountInStock === null || formData.amountInStock === undefined || formData.amountInStock <= 0) {
        errors.amountInStock = "Amount In Stock is required.";
    }


    return errors;
};




