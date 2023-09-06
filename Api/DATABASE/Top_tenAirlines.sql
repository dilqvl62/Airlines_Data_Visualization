-- Table: public.total_flights

--DROP TABLE IF EXISTS public.total_flights;

CREATE TABLE IF NOT EXISTS public.total_flights
(
    carrier_name character varying COLLATE pg_catalog."default" NOT NULL,
    total_arriving_flights double precision,
    air_carrier_delay double precision,
    weather_delay double precision,
    nat_aviation_delay double precision,
    CONSTRAINT total_flights_pkey PRIMARY KEY (carrier_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.total_flights
    OWNER to postgres;

SELECT * FROM public.total_flights
ORDER BY carrier_name ASC 

--Updating the carrier_name column
UPDATE public.total_flights
SET carrier_name = 
  CASE
    WHEN carrier_name LIKE '% Airlines Inc.%' THEN REPLACE(carrier_name, ' Airlines Inc.', '')
    WHEN carrier_name LIKE '% Air Lines Inc.%' THEN REPLACE(carrier_name, ' Air Lines Inc.', '')
	  WHEN carrier_name LIKE '% Air Lines%' THEN REPLACE(carrier_name, ' Air Lines', '')
	  WHEN carrier_name LIKE '% Airlines Co.%' THEN REPLACE(carrier_name, ' Airlines Co.', '')
	  WHEN carrier_name LIKE '% Airways%' THEN REPLACE(carrier_name, ' Airways', '')
   
    ELSE carrier_name 
  END;