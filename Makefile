#
# Make the swagger client
#

client:
	docker run --rm -v `pwd`:/api swaggerapi/swagger-codegen-cli generate -l javascript -i /api/schema/swagger.json -o /api --additional-properties usePromises=true
