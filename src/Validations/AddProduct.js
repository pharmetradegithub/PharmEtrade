export const ProductInfoValidation = (formData)=>{
    let errors = false;
    if(formData.expirationDate==null && formData.categorySpecification==1)
    {
        errors = true;
    }
    if (!formData.selectedStates || formData.selectedStates.length === 0) {
        errors = true;
    }
    return errors;
}



