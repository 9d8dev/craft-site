import DrawerWrapper from '@/components/drawer-wrapper';
import One from "@/components/type/hero/one"

const components = [
  {
    "name": "One",
    "type": "Hero",
    "component": One,
    "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "description": "This is a test component for set up of the Craft UI library",
  },
  {
    "name": "Two",
    "type": "Hero",
    "component": One,
    "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "description": "This is a test component for set up of the Craft UI library",
  },
  {
    "name": "Three",
    "type": "Hero",
    "component": One,
    "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "description": "This is a test component for set up of the Craft UI library",
  }
];

export default function Home() {
  return (
    <main>
      <h1 className='text-4xl my-12'>Welcome to Craft UI</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {components.map((component, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl my-4">{component.name}</h2>
            <p className="text-gray-500">{component.description}</p>
            <DrawerWrapper name="This is a test.">
              <component.component />
            </DrawerWrapper>
          </div>
        ))}

      </div>
    </main>
  );
}
