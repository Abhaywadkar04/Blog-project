import React from "react";

function PrivacyPolicy() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
                <p className="text-lg text-gray-500 dark:text-[#b3b3b3]">
                    At WordSmith, we are committed to protecting the privacy and security of our users. This privacy policy
                    explains how we collect, use, and safeguard your personal information when you use our blog app.
                </p>
                    <div>
                        <p className="text-gray-500 dark:text-[#b3b3b3]">
                            We collect certain personal information from you when you use our app, such as your name, email address,
                            and any content you choose to share with us. We may also collect information about your device, such as
                            your IP address and browser type, to help us improve our services.
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-[#b3b3b3]">
                            We use the information we collect to provide and improve our app, to communicate with you, and to comply
                            with legal requirements. We may also use your information for marketing purposes, but we will always give
                            you the option to opt-out of such communications.
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-[#b3b3b3]">
                            We may share your information with third-party service providers who help us operate our app, but we will
                            only share the minimum amount of information necessary and we will ensure that they maintain the same
                            level of privacy and security as we do.
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-[#b3b3b3]">
                            We store your personal information securely on our servers, and we will retain it for as long as necessary
                            to fulfill the purposes for which it was collected. We will also delete your information upon request,
                            subject to any legal or regulatory requirements.
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-[#b3b3b3]">
                            We take a range of technical and organizational measures to protect your personal information from
                            unauthorized access, use, or disclosure. This includes using encryption, firewalls, and other security
                            protocols to safeguard your data.
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-[#b3b3b3]">
                            You have the right to access, correct, or delete your personal information, and to object to or restrict
                            the processing of your data. You can also request a copy of your data, and you have the right to lodge a
                            complaint with a supervisory authority if you believe your rights have been violated.
                        </p>
                    </div>
                <p className="text-gray-500 dark:text-[#b3b3b3]">
                    If you have any questions or concerns about our privacy policy, please don't hesitate to contact us at{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        support@wordsmith.com
                    </a>
                    .
                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy;