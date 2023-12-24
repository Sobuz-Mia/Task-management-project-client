const UserCategoriesSection = () => {
  const userCategories = [
    {
      category: "Developers",
      description: "Efficient project management and collaboration",
    },
    {
      category: "Corporate Professionals",
      description: "Streamline daily business tasks and projects",
    },
    {
      category: "Bankers",
      description: "Organize and manage financial tasks seamlessly",
    },
    {
      category: "Students",
      description: "Keep track of assignments and projects",
    },
    {
      category: "Freelancers",
      description: "Manage diverse tasks for multiple clients",
    },
    {
      category: "Entrepreneurs",
      description: "Coordinate and prioritize tasks for business success",
    },
    {
      category: "Researchers",
      description: "Track and manage research tasks and projects",
    },
    {
      category: "Designers",
      description: "Organize design tasks and project workflows",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Who Can Benefit from Our Platform?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {userCategories.map((userCategory, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">
                {userCategory.category}
              </h3>
              <p className="text-gray-700">{userCategory.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserCategoriesSection;
