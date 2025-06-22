import Hero from './Hero';
import Certificate from './Certificate';
import BulkStep from './BulkStep';
import Testimonials from './Testimonials';

export default function Home({children}) {
  return (
    <div>
            {children}
            <Hero />
            <Certificate />
            <BulkStep />
            <Testimonials />
    </div>
  );
}
