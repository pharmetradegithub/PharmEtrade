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

  
    if (formData.states.length <= 0) {
        console.log(formData.states.length, "why");

        errors.states = "At least one state must be selected.";
    }

    if (formData.imageUrl && formData.imageUrl.size > 5 * 1024 * 1024) {
        errors.imageUrl = "Image size must not exceed 5MB.";
      }
    if (formData.videoUrl && formData.videoUrl.size > 25 * 1024 * 1024) {
        errors.videoUrl = "Video size must not exceed 25MB.";
      }

    return errors;
};



// export const ProductPriceValidation = (formData) => {
//     let errors = {};

//     if (formData.price === null || formData.price === undefined || formData.price <= 0) {
//         errors.price = "Price is required and must be greater than 0.";
//     }


//     // if ( formData.salePrice) {  // Check for positive sale price
//     //     console.log(formData.salePriceTo,formData.salePriceForm);
//     //     if (!formData.salePriceForm || formData.salePriceForm.trim() === "") {
//     //         errors.salePriceForm = "Sale price 'from' date is required.";
//     //     }
//     //     if (!formData.salePriceTo || formData.salePriceTo.trim() === "") {
//     //         errors.salePriceTo = "Sale price 'to' date is required.";
//     //     }
//     //     if (formData?.salePriceTo<formData.salePriceForm){
//     //         errors.salePriceForm = "Sale price 'from' date must Less than Sale Price To.";
//     //     }
//     // }

//     if (formData.salePrice > 0) {  // Check if sale price is positive
//         if (!formData.salePriceForm || formData.salePriceForm.trim() === "") {
//             errors.salePriceForm = "Sale price 'from' date is required.";
//         }
//         if (!formData.salePriceTo || formData.salePriceTo.trim() === "") {
//             errors.salePriceTo = "Sale price 'to' date is required.";
//         }
//     }
    
//     // Separate condition to validate the date range, regardless of salePrice value
//     if (formData.salePriceForm && formData.salePriceTo) {
//         if (new Date(formData.salePriceTo) < new Date(formData.salePriceForm)) {
//             errors.salePriceForm = "Sale price 'from' date must be earlier than 'to' date.";
//         }
//     }
    

    
//     const price = parseFloat(formData.price);
//     const upnMemberPrice = parseFloat(formData.upnMemberPrice);
//     const salePrice = parseFloat(formData.salePrice);

//     if (!upnMemberPrice || upnMemberPrice <= 0) {
//         errors.upnMemberPrice = "Upn Member Price is required and must be greater than 0.";
//     } else {
//         if (upnMemberPrice >= price) {
//             errors.upnMemberPrice = "Upn Member Price must be less than the price.";
//         }
//         if (salePrice > 0 && upnMemberPrice >= salePrice) {
//             errors.upnMemberPrice = "Upn Member Price must be less than the sale price.";
//         }
//     }

//     if (formData.amountInStock === null || formData.amountInStock === undefined || formData.amountInStock <= 0) {
//         errors.amountInStock = "Amount In Stock is required.";
//     }

//     if (formData.minOrderQuantity === null || formData.minOrderQuantity === undefined || formData.minOrderQuantity <= 0) {
//         errors.minOrderQuantity = "Minimum Order Quantity is required and must be greater than 0.";
//     }

//     if (formData.maxOrderQuantity === null || formData.maxOrderQuantity === undefined || formData.maxOrderQuantity <= 0) {
//         errors.maxOrderQuantity = "Maximum Order Quantity is required and must be greater than 0.";
//     } else
//         if (formData.maxOrderQuantity <= formData.minOrderQuantity) {
//             errors.maxOrderQuantity = "Maximum Order Quantity must be greater than Minimum Order Quantity.";
//         }
//     return errors;
// };

export const ProductPriceValidation = (formData) => {
    let errors = {};

    if (formData.price === null || formData.price === undefined || formData.price <= 0) {
        errors.price = "Price is required and must be greater than 0.";
    }

    if (formData.salePrice > 0) { // Check if sale price is positive
        if (!formData.salePriceForm || formData.salePriceForm.trim() === "") {
            errors.salePriceForm = "Sale price 'from' date is required.";
        }
        if (!formData.salePriceTo || formData.salePriceTo.trim() === "") {
            errors.salePriceTo = "Sale price 'to' date is required.";
        }
    }
    
    // Validate the date range
    if (formData.salePriceForm && formData.salePriceTo) {
        if (new Date(formData.salePriceTo) < new Date(formData.salePriceForm)) {
            errors.salePriceForm = "Sale price 'from' date must be earlier than 'to' date.";
        }
    }

    const price = parseFloat(formData.price);
    const upnMemberPrice = parseFloat(formData.upnMemberPrice);
    const salePrice = parseFloat(formData.salePrice);

    if (!upnMemberPrice || upnMemberPrice <= 0) {
        errors.upnMemberPrice = "Upn Member Price is required and must be greater than 0.";
    } else {
        if (upnMemberPrice >= price) {
            errors.upnMemberPrice = "Upn Member Price must be less than the price.";
        }
        if (salePrice > 0 && upnMemberPrice >= salePrice) {
            errors.upnMemberPrice = "Upn Member Price must be less than the sale price.";
        }
    }

    if (formData.amountInStock === null || formData.amountInStock === undefined || formData.amountInStock <= 0) {
        errors.amountInStock = "Amount In Stock is required.";
    }

    // Convert minOrderQuantity and maxOrderQuantity to integers for validation
    const minOrderQuantity = parseInt(formData.minOrderQuantity, 10);
    const maxOrderQuantity = parseInt(formData.maxOrderQuantity, 10);

    if (!minOrderQuantity || minOrderQuantity <= 0) {
        errors.minOrderQuantity = "Minimum Order Quantity is required and must be greater than 0.";
    }

    if (!maxOrderQuantity || maxOrderQuantity <= 0) {
        errors.maxOrderQuantity = "Maximum Order Quantity is required and must be greater than 0.";
    } else if (maxOrderQuantity <= minOrderQuantity) {
        errors.maxOrderQuantity = "Maximum Order Quantity must be greater than Minimum Order Quantity.";
    }

    return errors;
};



