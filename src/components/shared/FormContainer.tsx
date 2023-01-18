const FormContainer = ({title,children}:any) => {

    return (
        <div className="flex flex-col  w-full rounded shadow-md bg-blue-500 p-5 items-center justify-center">
            <div className="h-10 w-full rounded-t flex items-center justify-center mb-2">
                <h2 className="text-xl font-extrabold text-blue-900">{title}</h2>
            </div>
        {children}
        </div>
    )
}

export default FormContainer;

export type Props = {
    children: any;
    title: string;
  };

