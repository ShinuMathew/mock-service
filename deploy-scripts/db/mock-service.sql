-- MOCK SERVICE --

-- COURSES --
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

-- COURSE TYPE --
CREATE TABLE IF NOT EXISTS course_type (
	value text primary key,
	description text,
	created_date timestamp with time zone DEFAULT now(),
   	modified_date timestamp with time zone DEFAULT now()
) WITH (
    OIDS=FALSE
);
 
ALTER TABLE course_type OWNER TO mockadmin;

INSERT INTO course_type (value, description) VALUES ('SD', 'Software Development') ON CONFLICT DO NOTHING;
INSERT INTO course_type (value, description) VALUES ('AU', 'Automation') ON CONFLICT DO NOTHING;
INSERT INTO course_type (value, description) VALUES ('PF', 'Performance Engineering') ON CONFLICT DO NOTHING;
INSERT INTO course_type (value, description) VALUES ('DE', 'Data Engineering') ON CONFLICT DO NOTHING;
INSERT INTO course_type (value, description) VALUES ('DV', 'Devops') ON CONFLICT DO NOTHING;
INSERT INTO course_type (value, description) VALUES ('MD', 'Mobile Development') ON CONFLICT DO NOTHING;
INSERT INTO course_type (value, description) VALUES ('ML', 'Machine Learning') ON CONFLICT DO NOTHING;
INSERT INTO course_type (value, description) VALUES ('CS', 'CyberSecurity') ON CONFLICT DO NOTHING;
--  ----------------------------------------------------------------------------------------------------------