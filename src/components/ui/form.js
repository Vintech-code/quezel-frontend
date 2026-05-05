import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext, } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
const Form = FormProvider;
const FormFieldContext = React.createContext(null);
const FormField = (props) => {
    return (_jsx(FormFieldContext.Provider, { value: { name: props.name }, children: _jsx(Controller, { ...props }) }));
};
FormField.displayName = "FormField";
const FormItemContext = React.createContext(null);
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
    const id = React.useId();
    return (_jsx(FormItemContext.Provider, { value: { id }, children: _jsx("div", { ref: ref, className: cn("space-y-2", className), ...props }) }));
});
FormItem.displayName = "FormItem";
const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();
    if (!fieldContext) {
        throw new Error("useFormField must be used within <FormField>");
    }
    const fieldState = getFieldState(fieldContext.name, formState);
    const id = itemContext?.id ?? fieldContext.name;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();
    return (_jsx(Label, { ref: ref, className: cn(error && "text-destructive", className), htmlFor: formItemId, ...props }));
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (_jsx(Slot, { ref: ref, id: formItemId, "aria-describedby": error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId, "aria-invalid": Boolean(error), ...props }));
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return (_jsx("p", { ref: ref, id: formDescriptionId, className: cn("text-sm text-muted-foreground", className), ...props }));
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error.message) : children;
    if (!body) {
        return null;
    }
    return (_jsx("p", { ref: ref, id: formMessageId, className: cn("text-sm font-medium text-destructive", className), ...props, children: body }));
});
FormMessage.displayName = "FormMessage";
export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField, };
