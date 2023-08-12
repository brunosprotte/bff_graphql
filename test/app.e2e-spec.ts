import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import BusinessValidationFilter from '../src/validation/filters/business/business-validaton.filters';
import SchemaValidationFilter from '../src/validation/filters/schema/schema-validaton.filters';
import AnyExceptionFilter from '../src/validation/filters/server-error/any-exception.filters';
import schemaValidationErrorMapper from '../src/validation/model/schema-validation-error.mapper';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalFilters(new AnyExceptionFilter(), new SchemaValidationFilter(), new BusinessValidationFilter());

    app.useGlobalPipes(
        new ValidationPipe({
            validationError: {
                target: false,
                value: false,
            },
            forbidNonWhitelisted: true,
            // forbidUnknownValues: true,
            whitelist: true,
            exceptionFactory: schemaValidationErrorMapper,
        }),
    );
    
    await app.init();
  });

  it('should get the orders', () => {
      
      const expected = ""
      const query = '{orders {id}}';

      const response = request(app.getHttpServer())
        .post("/graphql")
        .send({ query })
        // .expect(200)
        // .expect((res) => {
        //   expect(res.body.data.getCats).toEqual(expected);
        // });


        console.log(response)

        return;

  });

});
