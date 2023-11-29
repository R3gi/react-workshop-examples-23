import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string;
  lastName: string;
  age: number | null;
  company: string;
};

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
    reset,
    trigger,
  } = useForm<Inputs>({ defaultValues: { firstName: 'Test' } });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">
          First Name:
          <input {...register('firstName', { required: true, maxLength: 20 })} />
        </label>
        <div>{errors.firstName && <span>This field is required</span>}</div>
      </div>

      <div>
        <label htmlFor="lastName">
          Last Name:
          <input
            {...register('lastName', {
              required: { value: true, message: 'This field is required' },
              pattern: { value: /^[A-Za-z]+$/i, message: 'This field must contain letters' },
            })}
          />
        </label>
        <div>{errors.lastName && <span>{errors.lastName.message}</span>}</div>
      </div>
      <div>
        <label htmlFor="company">
          Company:
          <input
            {...register('company', {
              validate: value => value === 'A' || 'Must be A',
            })}
          />
        </label>
        <div>{errors.company && <span>{errors.company.message}</span>}</div>
      </div>
      <div>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            {...register('age', {
              min: { value: 18, message: 'Age must be more than 18' },
              max: { value: 99, message: 'Age must be less than 99' },
              deps: ['company'],
              validate: () => {
                if (!watch('company')) {
                  return 'Company must be filled';
                }

                return true;
              },
            })}
          />
        </label>
        <div>{errors.age && <span>{errors.age.message}</span>}</div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            trigger(['firstName', 'lastName']);
          }}
        >
          Validate only names
        </button>
      </div>
      <div>
        <button type="button" onClick={() => clearErrors()}>
          Clear all errors
        </button>
      </div>
      <div>
        <button type="button" onClick={() => reset({ firstName: '', lastName: '', age: null, company: '' })}>
          Reset all
        </button>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
