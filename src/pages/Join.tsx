import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const waitlistSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  designation: z.string().min(1, 'Please select your designation'),
  customDesignation: z.string().optional(),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

const Join = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCustomDesignation, setShowCustomDesignation] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema),
  });

  const designationValue = watch('designation');

  const onSubmit = async (data: WaitlistForm) => {
    setIsLoading(true);

    try {
      // Check if email already exists
      const { data: existingUser, error: checkError } = await supabase
        .from('Waitlist')
        .select('email')
        .eq('email', data.email)
        .maybeSingle();

      if (checkError) {
        throw checkError;
      }

      if (existingUser) {
        setIsSubmitted(true);
        toast({
          title: "You're already in! 🎉",
          description: 'This email is already on our waitlist.',
        });
        reset();
        setIsLoading(false);
        return;
      }

      // Prepare data for Supabase
      const designation =
        data.designation === 'Other'
          ? data.customDesignation
          : data.designation;

      const { error } = await supabase.from('Waitlist').insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          designation: designation,
        },
      ]);

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      toast({
        title: 'Success!',
        description: "You've been added to our waitlist.",
      });

      reset();
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast({
        title: 'Error',
        description:
          'There was an error joining the waitlist. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px #1f2937 inset !important;
          -webkit-text-fill-color: #f9fafb !important;
        }
      `}</style>
      <div className="min-h-screen">
        <Navigation />
        <div className="min-h-screen bg-gradient-hero pt-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="mb-16 pt-14 text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Join <span className="gradient-text">Plamento</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Be the first to experience AI-powered mock interviews. Join our
                waitlist today.
              </p>
            </div>

            {/* Why Join Waitlist Section */}
            <div className="mb-24">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-center text-3xl font-bold">
                  Why Join Waitlist?
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="col-span-1 flex rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white transition-all duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-700 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <h3 className="gradient-text mb-2 font-bold">
                          Early Access
                        </h3>
                        <p className="text-sm text-gray-300">
                          Use the platform before public release and start
                          preparing early.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 flex rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white transition-all duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-700 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🔍</span>
                      <div>
                        <h3 className="gradient-text mb-2 font-bold">
                          Feature Preview
                        </h3>
                        <p className="text-sm text-gray-300">
                          Try out tools like Resume Checker and JD Analyzer
                          before others.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white transition-all duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-700 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <h3 className="gradient-text mb-2 font-bold">
                          Influence the Product
                        </h3>
                        <p className="text-sm text-gray-300">
                          Share feedback and help us shape features to better
                          suit user needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white transition-all duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-700 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🎁</span>
                      <div>
                        <h3 className="gradient-text mb-2 font-bold">
                          Surprise Perks
                        </h3>
                        <p className="text-sm text-gray-300">
                          Eligible for giveaways, discount coupons, or free
                          premium access.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white transition-all duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-700 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <h3 className="gradient-text mb-2 font-bold">
                          Placement-Ready, First
                        </h3>
                        <p className="text-sm text-gray-300">
                          Be placement-ready before the rest. Stay one step
                          ahead with smart prep tools.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* New Card */}
                  <div className="col-span-1 flex rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white transition-all duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-700 hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🌟</span>{' '}
                      {/* Placeholder icon */}
                      <div>
                        <h3 className="gradient-text mb-2 font-bold">
                          Exclusive Updates
                        </h3>{' '}
                        {/* Placeholder title */}
                        <p className="text-sm text-gray-300">
                          Stay informed with the latest news and developments
                          about Plamento.
                        </p>{' '}
                        {/* Placeholder description */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-12 border-b border-gray-700"></div>

            {/* Registration Section */}
            <div className="mb-16 mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              {/* Left Side - Content */}
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <h2 className="mb-4 text-3xl font-bold">Be First in Line.</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We're excited to bring you our innovative solution soon!
                    Sign up now to secure your spot and get early access when we
                    launch.
                  </p>
                  <p>
                    By joining our waitlist, you'll be among the first to
                    experience our groundbreaking platform. Don't miss out on
                    this opportunity to stay ahead of the curve!
                  </p>
                </div>
              </div>

              {/* Right Side - Registration Form */}
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                {!isSubmitted ? (
                  <>
                    <h2 className="mb-6 text-2xl font-semibold">
                      Join the Waitlist
                    </h2>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="text-left">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            {...register('firstName')}
                            placeholder="Enter your first name"
                            className="mt-1"
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-destructive">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>

                        <div className="text-left">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            {...register('lastName')}
                            placeholder="Enter your last name"
                            className="mt-1"
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-destructive">
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-left">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder="Enter your email"
                          className="mt-1"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="text-left">
                        <Label htmlFor="designation">Designation</Label>
                        <Select
                          onValueChange={(value) => {
                            setValue('designation', value);
                            setShowCustomDesignation(value === 'Other');
                            if (value !== 'Other') {
                              setValue('customDesignation', '');
                            }
                          }}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your designation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Student">Student</SelectItem>
                            <SelectItem value="Working Professional">
                              Working Professional
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.designation && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.designation.message}
                          </p>
                        )}

                        {showCustomDesignation && (
                          <div className="mt-3">
                            <Input
                              {...register('customDesignation')}
                              placeholder="Please specify your designation"
                              className="mt-1"
                            />
                          </div>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="btn-hero w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Joining Waitlist...
                          </>
                        ) : (
                          'Join Waitlist'
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="animate-fade-in">
                    <div className="mb-4 flex justify-center">
                      <CheckCircle className="animate-scale-in h-16 w-16 text-primary" />
                    </div>
                    <h2 className="mb-4 text-2xl font-semibold">
                      You're on the list!
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      We'll reach out soon with updates about Plamento!
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="w-full"
                    >
                      Join Another Person
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Join;
