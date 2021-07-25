-- MOCK SERVICE --

CREATE TABLE IF NOT EXISTS courses (
	courseId text primary key,
	courseName text,
	courseType text,
	created_date timestamp with time zone DEFAULT now(),
   	modified_date timestamp with time zone DEFAULT now()
) WITH (
    OIDS=FALSE
);
 
ALTER TABLE courses OWNER TO mockadmin;

INSERT INTO courses (courseId, courseName, courseType) VALUES ('SD001', 'Core Java', 'Software Development') ON CONFLICT DO NOTHING;
INSERT INTO courses (courseId, courseName, courseType) VALUES ('SD002', 'Javascript', 'Software Development') ON CONFLICT DO NOTHING;
INSERT INTO courses (courseId, courseName, courseType) VALUES ('DV001', 'Docker', 'Devops') ON CONFLICT DO NOTHING;
INSERT INTO courses (courseId, courseName, courseType) VALUES ('AU001', 'Selenium', 'Automation') ON CONFLICT DO NOTHING;
INSERT INTO courses (courseId, courseName, courseType) VALUES ('DE001', 'BigData', 'Data Engineering') ON CONFLICT DO NOTHING;

--  ----------------------------------------------------------------------------------------------------------