import { createServer, Response } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/skills", () => {
        return {
          skills: this.db.skills
        };
      });

      this.get("/skills/:id", (schema, request) => {
        const id = request.params.id;
        const skill = schema.db.skills.find(id);
        if (!skill) {
          return new Response(404, {}, { error: "Skill not found" });
        }
        return skill;
      });

      this.get("/user", () => {
        return {
          user: {
            id: "u1",
            username: "john_doe",
            bio: "I love teaching and learning new skills!",
          },
        };
      });

      this.get("/user/skills", () => {
        return {
          skills: [
            {
              id: "s1",
              title: "Web Development",
              description: "Build modern websites with HTML, CSS, JS, and React.",
              category: "Technology",
              level: "Intermediate",
            },
            {
              id: "s5",
              title: "Photography",
              description: "Capture stunning shots with any camera.",
              category: "Creative",
              level: "Intermediate",
            },
          ],
        };
      });

      this.get("/user/learning", () => {
        return {
          skills: [
            {
              id: "s2",
              title: "Guitar Basics",
              description: "Learn chords and strumming patterns.",
              category: "Music",
              level: "Beginner",
            },
            {
              id: "s7",
              title: "UX Design",
              description: "Design beautiful and functional user interfaces.",
              category: "Design",
              level: "Intermediate",
            },
          ],
        };
      });

      this.post("/user/skills", (schema, request) => {
        const newSkill = JSON.parse(request.requestBody);
        newSkill.id = `s${Math.floor(Math.random() * 10000)}`;
        return {
          message: "Skill added to teaching list!",
          skill: newSkill,
        };
      });

      this.post("/user/learning", (schema, request) => {
        const newSkill = JSON.parse(request.requestBody);
        newSkill.id = `s${Math.floor(Math.random() * 10000)}`;
        return {
          message: "Skill added to learning list!",
          skill: newSkill,
        };
      });
    },

    seeds(server) {
      server.db.loadData({
        skills: [
          {
            id: "s1",
            title: "Web Development",
            description: "Build modern websites with HTML, CSS, JS, and React.",
            category: "Technology",
            level: "Intermediate",
            rating: "4",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s2",
            title: "Guitar Basics",
            description: "Learn chords and strumming patterns.",
            category: "Music",
            level: "Beginner",
            rating: "3.5",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s3",
            title: "Public Speaking",
            description: "Master stage presence and confidence.",
            category: "Soft Skills",
            level: "Advanced",
            rating: "4.5",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s4",
            title: "Cooking 101",
            description: "Easy and quick recipes to get started.",
            category: "Lifestyle",
            level: "Beginner",
            rating: "3",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s5",
            title: "Photography",
            description: "Capture stunning shots with any camera.",
            category: "Creative",
            level: "Intermediate",
            rating: "4.5",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s6",
            title: "Python Programming",
            description: "Learn basics of Python for automation & data.",
            category: "Technology",
            level: "Beginner",
            rating: "4",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s7",
            title: "UX Design",
            description: "Design beautiful and functional user interfaces.",
            category: "Design",
            level: "Intermediate",
            rating: "2.3",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s8",
            title: "Fitness Training",
            description: "Get fit with simple daily workouts.",
            category: "Health",
            level: "Beginner",
            rating: "4.4",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s9",
            title: "Spanish Language",
            description: "Start speaking basic Spanish quickly.",
            category: "Language",
            level: "Beginner",
            rating: "3.9",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s10",
            title: "Digital Marketing",
            description: "Grow your brand using social media and SEO.",
            category: "Business",
            level: "Intermediate",
            rating: "4.3",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s11",
            title: "Video Editing",
            description: "Edit videos using tools like Adobe Premiere.",
            category: "Creative",
            level: "Intermediate",
            rating: "4.6",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s12",
            title: "Chess Tactics",
            description: "Learn strategies to outplay your opponents.",
            category: "Games",
            level: "Advanced",
            rating: "4.7",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s13",
            title: "Machine Learning",
            description: "Get started with AI concepts and models.",
            category: "Technology",
            level: "Advanced",
            rating: "5",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s14",
            title: "Calligraphy",
            description: "Create beautiful handwritten art.",
            category: "Art",
            level: "Beginner",
            rating: "4.9",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s15",
            title: "Entrepreneurship",
            description: "Build and scale your own startup.",
            category: "Business",
            level: "Advanced",
            rating: "4.6",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s16",
            title: "Origami",
            description: "Fold paper into amazing shapes.",
            category: "Art",
            level: "Beginner",
            rating: "4.1",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s17",
            title: "Meditation",
            description: "Relax and focus your mind with guided meditation.",
            category: "Health",
            level: "Beginner",
            rating: "3.7",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s18",
            title: "Mobile App Development",
            description: "Create apps with Flutter or React Native.",
            category: "Technology",
            level: "Intermediate",
            rating: "3",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s19",
            title: "3D Modeling",
            description: "Design objects using Blender.",
            category: "Design",
            level: "Advanced",
            rating: "4.7",
            tutorName: "suhani",
            duration: "2 weeks"
          },
          {
            id: "s20",
            title: "French Language",
            description: "Basic French speaking and grammar skills.",
            category: "Language",
            level: "Beginner",
            rating: "5",
          },
        ]
      });
    }
  });
}

